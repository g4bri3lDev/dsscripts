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
            u.exit().remove()
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
            v.exit().remove()
        }

        function draw() {
            d3.select(graphRef.current)
            const simulation = d3.forceSimulation(data.nodes)
                .force('charge', d3.forceManyBody())
                .force('center', d3.forceCenter(250, 250))
                .on('tick', ticked)
            simulation.force('link', d3.forceLink().links(data.links).distance(100).strength(0))
            /*drag not working yet*/


            // d3.select(graphRef.current)
            //     .call(d3.drag()
            //         .container(graphRef.current)
            //         .subject(dragSubject)
            //         .on("start", dragStart)
            //         .on("drag", drag)
            //         .on("end", dragEnd)
            //
            //     )
            // function dragSubject(event){
            //     return simulation.find(event.x, event.y)
            // }
            // function dragStart(event){
            //     if (!event.active) simulation.alphaTarget(0.3).restart()
            //     event.subject.fx=event.subject.x
            //     event.subject.fy=event.subject.y
            // }
            // function drag(event) {
            //
            //     event.subject.fx = event.subject.x
            //     event.subject.fy = event.subject.y
            //
            // }
            // function dragEnd(event){
            //     if (!event.active) simulation.alphaTarget(0)
            //     event.subject.fx=null
            //     event.subject.fy=null
            // }
        }

        draw()
    }, [data])
    return (<svg ref={graphRef}/>)
}
