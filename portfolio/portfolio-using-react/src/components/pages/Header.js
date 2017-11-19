import AboutPage from './AboutPage';
var React     = require('react');
var ReactDOM  = require('react-dom');
var Scroll    = require('react-scroll');


var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;
var scroller  = Scroll.scroller;

var durationFn = function(deltaTop) {
    return deltaTop;
};

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
          <Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Home
        </Link>

        <Element name='Home' className='element'>
            <AboutPage />
        </Element>
        </div>
    );
        }
        };