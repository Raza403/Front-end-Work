import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
import Jumbotron from './../container/Jumbotron';
var React     = require('react');
var Scroll    = require('react-scroll');


var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
var scroller  = Scroll.scroller;

export default class Header extends React.Component{
    
      constructor (props){
          super(props);
          this.scrollToTop = this.scrollToTop.bind(this);
      }
    
      componentDidMount() {
    
        Events.scrollEvent.register('begin', () => {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', () => {
          console.log("end", arguments);
        });
    
        scrollSpy.update();
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>  
            scroller.scrollTo('scroll-container-second-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                containerId: 'scroll-container'
            }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      };

      render () {
        return (
          <div>
          <Link activeClass="active" to="jumbo" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Home
        </Link>

        <Element name='jumbo' className='element'>
            <Jumbotron />
        </Element>

        <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          About
        </Link>

        <Link activeClass="active" to="Portfolio" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Portfolio
        </Link>

        <Element name='About' className='element'>
            <AboutPage />
        </Element>

        <Element name='Portfolio' className='element'>
            <PortfolioPage />
        </Element>
        </div>
    );
        }
        };