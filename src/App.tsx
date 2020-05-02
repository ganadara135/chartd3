import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface IProps {
    data?: number[];
}

/* Component */
export const MyD3Component = (props: IProps) => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
    const d3Container = useRef(null);

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('text')
                    .data(props.data);

                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', 40)
                    .style('font-size', 24)
                    .text((d: number) => d);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d: number) => d);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        // [props.data, d3Container.current])
        [props.data, ])

    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    );
}

function App() {

  return (
    // <div id="chart"> </div>
    <div >
      <MyD3Component data={[1,2,3,5]}/>
    </div>

  );
}

export default App;



// const barData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// }; 

// const doughnutData = {
// 	labels: [
// 		'Red',
// 		'Green',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}]
// };

// const lineData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'My First dataset',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         // borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         // borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }
//     ]
//   };

// const polarData = {
//   datasets: [{
//     data: [
//       11,
//       16,
//       7,
//       3,
//       14
//     ],
//     backgroundColor: [
//       '#FF6384',
//       '#4BC0C0',
//       '#FFCE56',
//       '#E7E9ED',
//       '#36A2EB'
//     ],
//     label: 'My dataset' // for legend
//   }],
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//     'Grey',
//     'Blue'
//   ]
// };

// const radarData = {
//   labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(179,181,198,0.2)',
//       borderColor: 'rgba(179,181,198,1)',
//       pointBackgroundColor: 'rgba(179,181,198,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(179,181,198,1)',
//       data: [65, 59, 90, 81, 56, 55, 40]
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       pointBackgroundColor: 'rgba(255,99,132,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(255,99,132,1)',
//       data: [28, 48, 40, 19, 96, 27, 100]
//     }
//   ]
// };

// const scatterData = {
//   labels: ['Scatter'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//         { x: 65, y: 75 },
//         { x: 59, y: 49 },
//         { x: 80, y: 90 },
//         { x: 81, y: 29 },
//         { x: 56, y: 36 },
//         { x: 55, y: 25 },
//         { x: 40, y: 18 },
//       ]
//     }
//   ]
// };


// function App() {
//   // const data = [20, 10];

//   return (
//     // <div id="chart"> </div>
//     <div >
//       <div>
//         <h2>Bar Example</h2>
//         <Bar
//           data={barData}
//           // width={100}
//           height={200}
//           options={{ maintainAspectRatio: false }}
//         />
//       </div>
//       <h2>Doughnut Example</h2>
//       <Doughnut 
//         data={doughnutData}
//       />
//       <Line data={lineData} />
//       <h2>Polar Example</h2>
//       <Polar data={polarData} />
//       <h2>Radar Example</h2>
//       <Radar data={radarData} />
//       <h2>Scatter Example</h2>
//       <Scatter data={scatterData} />
//     </div>

//   );
// }

// export default App;