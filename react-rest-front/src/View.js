import React from 'react';
const RadarChart = require('react-chartjs').Radar;
const axios = require('axios');


class View extends React.Component {
    constructor() {
        super();
        this.state = {
            resData: {},
            data: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        fillColor: "rgba(179,181,198,0.2)",
                        strokeColor: "rgba(179,181,198,1)",
                        pointColor: "rgba(179,181,198,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(179,181,198,1)",
                        data: []
                    }
                ],
            },
            value: '',

        }

        this.handleClickSelector = this.handleClickSelector.bind(this)

    };

    handleClickSelector(category) {
        let resData = this.state.resData;
        let data;
        let label;
        if (category === "medical") {
            label = resData.medical;
            data = resData.medical_data
        }
        if (category === "effects") {
            label = resData.effects;
            data = resData.effects_data
        }
        if (category === "negatives") {
            label = resData.negatives;
            data = resData.negatives_data
        }
        this.setState({
            data: {
                labels: label,

                datasets: [
                    {
                        label: resData.name,
                        fillColor: "rgba(179,181,198,0.2)",
                        strokeColor: "rgba(179,181,198,1)",
                        pointColor: "rgba(179,181,198,1)",
                        pointStrokeColor: "red",
                        pointHighlightFill: "blue",
                        pointHighlightStroke: "rgba(179,181,198,1)",
                        data: data
                    }
                ],

            },
            options: {
                responsive: true,
                pointLabelFontSize: 14
            },
            description: resData.description,
            image: resData.imagePath
        })
    }


    componentWillMount() {
        axios.get('/strains/' + this.props.params.strains)
            .then(res => {
                let resData = res.data
                // console.log(resData)
                // console.log(res)
                this.setState({
                    resData: res.data,
                    data: {
                        labels: res.data.effects,

                        datasets: [
                            {
                                label: res.data.name,
                                fillColor: "rgba(179,181,198,0.2)",
                                strokeColor: "rgba(179,181,198,1)",
                                pointColor: "rgba(179,181,198,1)",
                                pointStrokeColor: "red",
                                pointHighlightFill: "blue",
                                pointHighlightStroke: "rgba(179,181,198,1)",
                                data: res.data.effects_data
                            }
                        ],

                    },
                    options: {
                        responsive: true,
                        pointLabelFontSize: 14
                    },
                    description: res.data.description,
                    image: res.data.imagePath
                })
            })
    }


    render() {
        // console.log(this.state.resData)
        return (
            <div className="container">
                <h1>{this.state.data.datasets[0].label.replace(/_/g, " ")}</h1>
                <div className="selector" onClick={() => { this.handleClickSelector("negatives") } }>
                    <h2>Negatives</h2>
                </div>

                <div className="selector" onClick={() => { this.handleClickSelector("medical") } }>
                    <h2>Medical</h2>
                </div>
                <div className="selector" onClick={() => { this.handleClickSelector("effects") } }>
                    <h2>Effects</h2>
                </div>

                <div className="box">

                    <img src={this.state.image} />
                    <div id="RadarChart">
                        <RadarChart data={this.state.data} options={this.state.options} redraw />
                    </div>
                    <div className="box">
                        <h3>Description</h3>
                        <p>{this.state.description} </p>

                    </div>
                </div>
            </div>


        )
    }
}
export default View;