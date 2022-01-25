import React from 'react'
import "./Progress.css"
function Progress() {
    return (
        <>
            <div className="body_page_3 container " id="Progress">
                <div className="title2">
                    <h1>PROGRESS CHART</h1> 
                </div>
                <div className="progress_charts container">
                
                    <div className="chart">
                        <h4>PYTHON</h4>
                        <div className="graph python">
                            <div className="fill">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="chart">
                        <h4>SQL</h4>
                        <div className="graph sql">
                        <div className="fill">
                        <span>85%</span>
                        </div>
                        </div>
                    </div>
                    <div className="chart">
                        <h4>HTML</h4>
                        <div className="graph html">
                        <div className="fill">
                        <span>80%</span>
                        </div>
                        </div>
                    </div>
                    <div className="chart">
                        <h4>JAVA</h4>
                        <div className="graph java">
                        <div className="fill">
                        <span>75%</span>
                        </div>
                        </div>
                    </div>
                    <div className="chart">
                        <h4>CSS</h4>
                        <div className="graph css">
                        <div className="fill">
                        <span>65%</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="chart">
                        <h4>REACT JS</h4>
                        <div className="graph react-js">
                        <div className="fill">
                        <span>60%</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="chart">
                        <h4>C</h4>
                        <div className="graph c">
                        <div className="fill">
                        <span>70%</span>
                        </div>
                        </div>
                    </div>
                    <div className="chart">
                        <h4>REACT N.</h4>
                        <div className="graph react-native">
                        <div className="fill">
                        <span>55%</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress
