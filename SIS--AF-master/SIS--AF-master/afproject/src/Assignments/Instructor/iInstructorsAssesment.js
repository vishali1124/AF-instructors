import React, {Component} from 'react';
import 'src/Home.css'
import 'src/Slideshow.scss'
import Header from 'src/Header'
import Footer from 'src/Footer'
class AssignmentsHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slide />
                <div>

                </div>
                <Footer/>
            </div>
        );
    }
}
class Slide extends Component{
    render(){
        return(

            <div className="wrapper">
                <div className="slideshows">
                    <div className="slideshow slideshow--hero">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--before">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--after">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default AssignmentsHome;
