import React from "react";
import styles from "./TimelineTab.module.scss";

import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Calendar, 
  MapPin, 
  FileText, 
  Upload, 
  User, 
  CheckCircle,
  FolderArchive,
  PlusCircle,
  Paperclip,
  MessageSquare,
  Clock
} from "lucide-react";

const getIconForType = (type) => {
  switch (type) {
    case "Lead Created": return <PlusCircle size={16} />;
    case "Status Changed": return <CheckCircle size={16} />;
    case "Phone Call": return <Phone size={16} />;
    case "WhatsApp Sent": return <MessageCircle size={16} />;
    case "Email Sent": return <Mail size={16} />;
    case "Meeting Scheduled": 
    case "Meeting Completed": return <Calendar size={16} />;
    case "Site Visit": return <MapPin size={16} />;
    case "Notes Added": return <FileText size={16} />;
    case "Quotation Created":
    case "Quotation Updated": return <FileText size={16} />;
    case "Document Uploaded": return <Upload size={16} />;
    case "Converted to Client": return <User size={16} />;
    case "Converted to Project": return <FolderArchive size={16} />;
    default: return <CheckCircle size={16} />;
  }
};

const TIMELINE_DATA = [
  {
    date: "Today",
    events: [
      { 
        id: 14,
        time: "04:30 PM", 
        type: "Converted to Project",
        user: "Sarah Jenkins",
        description: "Lead successfully converted to a live project.", 
        attachments: [],
        comments: 0
      },
      { 
        id: 13,
        time: "02:15 PM", 
        type: "Converted to Client",
        user: "Sarah Jenkins",
        description: "Customer onboarded as a registered client.", 
        attachments: ["client_agreement.pdf"],
        comments: 1
      },
      { 
        id: 12,
        time: "11:00 AM", 
        type: "Document Uploaded",
        user: "Rahul Verma",
        description: "Uploaded signed NDA and floor plans.", 
        attachments: ["nda_signed.pdf", "floor_plans.zip"],
        comments: 0
      },
      { 
        id: 11,
        time: "10:30 AM", 
        type: "Quotation Updated",
        user: "Sarah Jenkins",
        description: "Revised quotation #Q00021 with requested discounts.", 
        attachments: ["Q00021_revised.pdf"],
        comments: 0
      },
      { 
        id: 10,
        time: "09:00 AM", 
        type: "Quotation Created",
        user: "Sarah Jenkins",
        description: "Initial quotation #Q00021 created for commercial building.", 
        attachments: ["Q00021.pdf"],
        comments: 0
      }
    ],
  },
  {
    date: "Yesterday",
    events: [
      { 
        id: 9,
        time: "05:45 PM",
        type: "Notes Added",
        user: "Rahul Verma",
        description: "Customer emphasized the need for a modern glass facade. Will need to factor this into the design.",
        attachments: [],
        comments: 0
      },
      { 
        id: 8,
        time: "04:00 PM",
        type: "Meeting Completed",
        user: "Rahul Verma",
        description: "Initial discovery meeting completed successfully at client office.",
        attachments: ["meeting_minutes.docx"],
        comments: 2
      },
      { 
        id: 7,
        time: "10:00 AM",
        type: "Site Visit",
        user: "Jane Doe",
        description: "Conducted physical site inspection. The terrain is suitable for deep foundation.",
        attachments: ["site_photo_1.jpg", "site_photo_2.jpg"],
        comments: 1
      }
    ],
  },
  {
    date: "18 July",
    events: [
      { 
        id: 6,
        time: "02:30 PM",
        type: "Meeting Scheduled",
        user: "Sarah Jenkins",
        description: "Scheduled discovery meeting for tomorrow at 4:00 PM.",
        attachments: [],
        comments: 0
      },
      { 
        id: 5,
        time: "11:15 AM",
        type: "Email Sent",
        user: "System",
        description: "Sent welcome email and company brochure.",
        attachments: ["brochure.pdf"],
        comments: 0
      },
      { 
        id: 4,
        time: "10:00 AM",
        type: "WhatsApp Sent",
        user: "Sarah Jenkins",
        description: "Sent quick greeting and introduction message on WhatsApp.",
        attachments: [],
        comments: 0
      },
      { 
        id: 3,
        time: "09:30 AM",
        type: "Phone Call",
        user: "Sarah Jenkins",
        description: "First contact made. Customer seems highly interested.",
        attachments: [],
        comments: 1
      }
    ],
  },
  {
    date: "15 July",
    events: [
      { 
        id: 2,
        time: "09:10 AM",
        type: "Status Changed",
        user: "System",
        description: "Lead status automatically updated from New to Contacted.",
        attachments: [],
        comments: 0
      },
      { 
        id: 1,
        time: "09:00 AM",
        type: "Lead Created",
        user: "System",
        description: "Lead captured from website Contact Us form.",
        attachments: [],
        comments: 0
      },
    ],
  },
];

const TimelineTab = ({ lead }) => {
  return (
    <div className={styles.card}>
      <h3>Activity Log</h3>
      <ul className={styles.timeline}>
        {TIMELINE_DATA.map((day, index) => (
          <li key={index}>
            <div className={styles.timelineDate}>{day.date}</div>
            <div className={styles.timelineContent}>
              {day.events.map((event) => (
                <div key={event.id} className={styles.timelineEvent}>
                  
                  <div className={styles.eventHeader}>
                    <div className={styles.eventTypeBlock}>
                      <span className={styles.iconWrapper}>{getIconForType(event.type)}</span>
                      <span className={styles.eventType}>{event.type}</span>
                    </div>
                    <div className={styles.eventMeta}>
                      <span className={styles.metaItem}><Clock size={12}/> {event.time}</span>
                      <span className={styles.metaItem}><User size={12}/> {event.user}</span>
                    </div>
                  </div>

                  <div className={styles.eventBody}>
                    <p className={styles.description}>{event.description}</p>
                    
                    {(event.attachments.length > 0 || event.comments > 0) && (
                      <div className={styles.eventFooter}>
                        {event.attachments.length > 0 && (
                          <span className={styles.footerItem}>
                            <Paperclip size={14} /> {event.attachments.length} Attachments
                          </span>
                        )}
                        {event.comments > 0 && (
                          <span className={styles.footerItem}>
                            <MessageSquare size={14} /> {event.comments} Comments
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.secondaryBtn}>+ Log Activity</button>
    </div>
  );
};

export default TimelineTab;
