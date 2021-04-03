import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'

export default function D3Graph({data}) {
    const graphRef = useRef()
    useEffect(() => {
        d3.select(graphRef.current)
            .style('border', '1px solid var(--primaryTextColor)')
            .attr("viewBox", [0, 0, 500, 500])

    }, [])
    useEffect(() => {
        function ticked() {
            let u = d3.select(graphRef.current)
                .selectAll('circle')
                .data(data.nodes)
            u.enter()
                .append('circle')
                .attr('r', 10)
                .attr('stroke', 'var(--primaryTextColor)')
                .attr('fill', 'var(--primaryTextColor)')
                .merge(u)
                .attr('cx', function (d) {
                    return d.x
                })
                .attr('cy', function (d) {
                    return d.y
                })
            let v = d3.select(graphRef.current)
                .selectAll('line')
                .data(data.links)
            v.enter()
                .append('line')
                .merge(v)
                .attr('stroke', 'var(--primaryTextColor)')
                .attr('x1', function (d) {
                    return d.source.x
                })
                .attr('y1', function (d) {
                    return d.source.y
                })
                .attr('x2', function (d) {
                    return d.target.x
                })
                .attr('y2', function (d) {
                    return d.target.y
                })
            u.exit().remove()
            v.exit().remove()

        }

        function draw() {
            d3.select(graphRef.current)
            const simulation = d3.forceSimulation(data.nodes)
                .force('charge', d3.forceManyBody().strength(-100))
                .force('center', d3.forceCenter(250, 250))
                .on('tick', ticked)
            simulation.force('link', d3.forceLink().links(data.links).distance(100).iterations(50).strength(2))

        }

        draw()
    }, [data])
    return (<svg ref={graphRef}/>)
}
