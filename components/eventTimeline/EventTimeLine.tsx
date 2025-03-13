import React from "react";
import "./EventTimeline.css";
import bg from "./image1.png";
import bg2 from "./image2.png";
import Image from "next/image";
interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
}

interface EventTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
}
const events = [
  {
    id: "1",
    title: "Registration Starts",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "2",
    title: "The Spartan Army Gathers",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "3",
    title: "The Fates Seal the Scrolls",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "4",
    title: "Ragnarök Begins",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "5",
    title: "Forge Your Destiny",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "6",
    title: "The Trials of Midgard",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "7",
    title: "The Sands of Time Run Dry",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "8",
    title: "The Gods Watch",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "9",
    title: "The Worthy Rise",
    description: "Brief Description",
    date: "April 4, 2025",
  },
  {
    id: "10",
    title: "Battle For Olympus",
    description: "Brief Description",
    date: "April 4, 2025",
  },
];

const EventTimeline: React.FC<EventTimelineProps> = ({
  title = "Event Timeline",
  subtitle = "YOUR GUIDE TO HACKMOL 6.0",
}) => {
  return (
    <div className="event-timeline-container font-custom">
      <div className="upper">
        <div className="event-timeline-header">
          <h1 className="event-timeline-title text-5xl">
            <span className="event-title-highlight ">Event</span> Timeline
          </h1>
          <h3 className="event-timeline-subtitle">{subtitle}</h3>
        </div>
      </div>

      <div className="event-timeline-content">
        <div className="event-timeline-image-container">
          <Image src={bg} alt="Event" className="event-timeline-image" />
        </div>

        <div className="event-timeline-events h-full">
          {events.map((event) => (
            <div className="event-timeline-item" key={event.id}>
              <div className="event-timeline-indicator">
                <Image
                  src={bg2}
                  className="event-timeline-circle"
                  alt="Indicator"
                />
              </div>
              <div className="event-timeline-details">
                <h3 className="event-timeline-title2">{event.title}</h3>
                <p className="event-timeline-description">
                  {event.description}
                </p>
              </div>
              <div className="event-timeline-date">{event.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
