import { useD3 } from './hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

const TAU = 2 * Math.PI;

// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-8.php
const gcd = function (x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

const crange = (n, offset) => {
  offset = offset ?? 0;
  return Array
    .from(Array(n).keys())
    .map(v => (TAU * (v / n + offset)));
}

const getStarLines = ({ n, d, starScale }) => {
  // Construct the correct number of points at equal distances around a circle
  const unorderedPoints = crange(n)
    .map(a => [starScale * Math.cos(a), starScale * Math.sin(a)]);

  // Group points by star, and build lines
  const numStars = gcd(n, d);
  const pointsPerStar = n / numStars;
  const lines = [];
  for (let star=0; star<numStars; star++) {
    const up = unorderedPoints
      .filter((_, ix) => ix % numStars == star);
    const points = up.map((_, ix) => up[(d/numStars)*ix % up.length]);
    getConnectingLines(points, lines);
  }
  return lines;
}

const asXY = (ang, r) => [(r ?? 1) * Math.cos(ang), (r ?? 1) * Math.sin(ang)];

const xyPlus = ([x0, y0], [x1, y1]) => [x0+x1, y0+y1];

const getLivePointPositions = ({ n, d, pointiness }, time) => {
  // The radii of the outer circles
  const circleRadius = d / n;
  // The radius from the center of the image to the outer circle centers
  const circleCenterRadius = 1 - circleRadius;
  // The angles of the circles
  const circleAngs = crange(n - d, time);
  // The angles of the points relative to the circle centers. When the circles move CCW by 1 unit, they will rotate CW by r - 1 units.
  // const pointAngs = crange(d, time * (1 - n/d));
  const pointAngs = crange(d, time * (1 - n/d));

  const points = [];
  circleAngs.forEach((cAng) => {
    const circleCenter = asXY(cAng, circleCenterRadius);
    pointAngs.forEach((ang) => {
      const p = xyPlus(circleCenter, asXY(ang, circleRadius*pointiness)); // NOTE: Tweak to affect circle smoothness!
      points.push(p);
    });
  });
  
  return points;
}

const getConnectingLines = (endPoints, arrayToPush) => {
  const result = endPoints.map((_, ix) => [endPoints[ix], endPoints[(ix+1) % endPoints.length]]);
  if (arrayToPush == undefined) {
    return result;
  }
  result.forEach(r => arrayToPush.push(r));
}

const getIntracircleLines = ({n, d}, testPoints) => {
  const lines = [];
  for (let i=0; i<n-d; ++i) {
    const subPoints = [];
    for (let j=0; j<d; ++j) {
      subPoints.push(testPoints[i*d + j]);
    }
    getConnectingLines(subPoints, lines);
  }
  return lines;
}

const getIntercircleLines = ({n, d}, testPoints) => {
  const lines = [];
  for (let j=0; j<d; ++j) {
    const subPoints = [];
    for (let i=0; i<n-d; ++i) {
      subPoints.push(testPoints[i*d + j]);
    }
    getConnectingLines(subPoints, lines);
  }
  return lines;
}

const StarVisualization = ({ starParameters, timeParameters, showParameters }) => {

  const {time, transitionTime} = timeParameters;
  const {showStar, showIntraShapes, showInterShapes, showPoints} = showParameters;

  const height = 600;
  const width = 600;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const starLineData = getStarLines(starParameters, 1);
  const testPoints = getLivePointPositions(starParameters, time);
  const intracircleLineData = getIntracircleLines(starParameters, testPoints);
  const intercircleLineData = getIntercircleLines(starParameters, testPoints);

  const ref = useD3(
    (svg) => {
      const scale = d3.scaleLinear;
      const x = scale()
        .domain([-1, 1])
        .rangeRound([margin.left, width - margin.right]);

      const y = scale()
        .domain([-1, 1])
        .rangeRound([margin.top, height - margin.bottom]);

      const starLines = svg
        .select(".plot-area")
        .selectAll(".starline")
        .data(starLineData)
        .join("line");
      
      starLines
        .transition()
        .duration(transitionTime)
        .ease(d3.easeLinear)
        .attr("class", "starline")
        .attr("stroke", "yellow")
        .attr("x1", l => x(l[0][0]))
        .attr("y1", l => x(l[0][1]))
        .attr("x2", l => x(l[1][0]))
        .attr("y2", l => x(l[1][1]))
        .attr("opacity", showStar ? 1 : 0);

      const intercircleLines = svg
        .select(".plot-area")
        .selectAll(".intercircleline")
        .data(intercircleLineData)
        .join("line");
      
      intercircleLines
        .transition()
        .duration(transitionTime)
        .ease(d3.easeLinear)
        .attr("class", "intercircleline")
        .attr("stroke", "red")
        .attr("x1", l => x(l[0][0]))
        .attr("y1", l => x(l[0][1]))
        .attr("x2", l => x(l[1][0]))
        .attr("y2", l => x(l[1][1]))
        .attr("opacity", showInterShapes ? 1 : 0);

      const intracircleLines = svg
        .select(".plot-area")
        .selectAll(".intracircleline")
        .data(intracircleLineData)
        .join("line");
      
      intracircleLines
        .transition()
        .duration(transitionTime)
        .ease(d3.easeLinear)
        .attr("class", "intracircleline")
        .attr("stroke", "green")
        .attr("x1", l => x(l[0][0]))
        .attr("y1", l => x(l[0][1]))
        .attr("x2", l => x(l[1][0]))
        .attr("y2", l => x(l[1][1]))
        .attr("opacity", showIntraShapes ? 1 : 0);

      const scatterPoints = svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".scatterpoint")
        .data(testPoints)
        .join("circle");

      scatterPoints
        .transition()
        .duration(transitionTime)
        .ease(d3.easeLinear)
        .attr("class", "scatterpoint")
        .attr("cx", p => x(p[0]))
        .attr("cy", p => y(p[1]))
        .attr("r", 10)
        .attr("fill", "blue")
        .attr("opacity", showPoints ? 1 : 0);
    },
    [time, showParameters, starParameters]
  );


  return (
    <svg
      ref={ref}
      display="block"
      margin="auto"
      viewBox={[0, 0, width, height].join(" ")}
    >
      <g className="plot-area" />
    </svg>
  );
}

export default StarVisualization;
