import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f5f5f5', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid  #f5f5f5' }}
        date="2020"
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={<i className="fa fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Personal Project</h3>
        <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
        <p>
          Developed a responsive e-commerce website using the MERN stack. Implemented various features such as user authentication, product listing, and cart functionality.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f5f5f5', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid  #f5f5f5' }}
        date="2021"
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={<i className="fa fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Freelance Project</h3>
        <h4 className="vertical-timeline-element-subtitle">Full Stack Developer</h4>
        <p>
          Collaborated with a client to develop a custom web application for their business. Designed and implemented a user-friendly interface, integrated third-party APIs, and optimized performance.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f5f5f5', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid  #f5f5f5' }}
        date="2022"
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={<i className="fa fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Personal Project</h3>
        <h4 className="vertical-timeline-element-subtitle">React Native Developer</h4>
        <p>
          Developed a mobile app using React Native for a personal project. Implemented features such as real-time data updates, push notifications, and in-app messaging.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f5f5f5', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid  #f5f5f5' }}
        date="2023"
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={<i className="fa fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Open Source Contribution</h3>
        <h4 className="vertical-timeline-element-subtitle">React Developer</h4>
        <p>
          Contributed to an open-source React library by fixing bugs, improving documentation, and implementing new features. Engaged with the community and participated in code reviews.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f5f5f5', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid  #f5f5f5' }}
        date="2023"
        iconStyle={{ background: '#333', color: '#fff' }}
        icon={<i className="fa fa-briefcase"></i>}
      >
        <h3 className="vertical-timeline-element-title">Completed Degree</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor In Computer Application</h4>
        <p>
        I am a proud graduate of Kathmandu College of Central State, holding a degree in Computer Applications (BCA). 
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
