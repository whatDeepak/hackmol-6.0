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
    title: "The Gates of Valhalla Open",
    description: "Hackathon Live",
    date: "March 13, 2025",
  },
  {
    id: "2",
    title: "The Spartan Oath",
    description: "Registration Starts",
    date: "March 14, 2025",
  },
  {
    id: "3",
    title: "Allies of the Gods",
    description: "Community Partner Form Registration",
    date: "March 20, 2025",
  },
  {
    id: "4",
    title: "The Warrior's Pledge",
    description: "Team Submission for Review",
    date: "March 20, 2025",
  },
  {
    id: "5",
    title: "The Scrolls of Fate",
    description: "PPT Submission",
    date: "March 29, 2025",
  },
  {
    id: "6",
    title: "The Final Call to Arms",
    description: "Registration Ends",
    date: "March 29, 2025",
  },
];

const EventTimeline: React.FC<EventTimelineProps> = () => {
  return (
    <div className="event-timeline-container font-custom bg-gradient-to-b from-[#0f1524] via-[#000] to-slate-950" id="schedule">
      <div className="upper">
        <div className="event-timeline-header">
          <h1 className="event-timeline-title text-5xl md:text-6xl">
            <span>Event timeline</span>
            <div className="h-0.5 max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"></div>
          </h1>
          <h3 className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">Chronicles of Battle</h3>
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
                <p className="event-timeline-description font-sans">
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
