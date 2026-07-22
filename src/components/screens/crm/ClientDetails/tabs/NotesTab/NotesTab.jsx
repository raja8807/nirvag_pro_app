import React, { useState } from "react";
import styles from "./NotesTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Bold, Italic, Underline, List, Link as LinkIcon, Paperclip, MessageSquare, History } from "lucide-react";

const MOCK_NOTES = [
  {
    id: 1,
    author: "Rahul Verma",
    initials: "RV",
    time: "2 hours ago",
    content: "Customer requested a layout change for the kitchen area. Mentioned @Architect to review the possibility of moving the sink to the island.",
    label: "Urgent",
  },
  {
    id: 2,
    author: "Sarah Jenkins",
    initials: "SJ",
    time: "Yesterday",
    content: "General follow-up note. Budget seems fixed at ₹45L. No room for negotiation on premium fittings.",
    label: "General",
  }
];

const getLabelClass = (label) => {
  switch (label.toLowerCase()) {
    case 'urgent': return styles.urgent;
    case 'technical': return styles.technical;
    default: return styles.general;
  }
};

const NotesTab = () => {
  const [newNote, setNewNote] = useState("");
  const [label, setLabel] = useState("General");

  return (
    <div className={styles.container}>
      
      {/* Create Note Box */}
      <div className={styles.createNoteBox}>
        <div className={styles.toolbar}>
          <button><Bold size={16}/></button>
          <button><Italic size={16}/></button>
          <button><Underline size={16}/></button>
          <button><List size={16}/></button>
          <button><LinkIcon size={16}/></button>
          <button><Paperclip size={16}/></button>
        </div>
        
        <textarea 
          className={styles.textArea} 
          placeholder="Write a note... Use @ to mention employees"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        
        <div className={styles.noteFooter}>
          <div className={styles.labelSelect}>
            <span>Label:</span>
            <select value={label} onChange={(e) => setLabel(e.target.value)}>
              <option>General</option>
              <option>Urgent</option>
              <option>Reminder</option>
              <option>Technical</option>
              <option>Financial</option>
            </select>
          </div>
          <CustomButton>Post Note</CustomButton>
        </div>
      </div>

      {/* Notes Feed */}
      <div className={styles.feed}>
        {MOCK_NOTES.map(note => (
          <div key={note.id} className={styles.noteCard}>
            <div className={styles.noteHeader}>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>{note.initials}</div>
                <div className={styles.meta}>
                  <span className={styles.authorName}>{note.author}</span>
                  <span className={styles.timestamp}>{note.time}</span>
                </div>
              </div>
              <span className={`${styles.noteBadge} ${getLabelClass(note.label)}`}>
                {note.label}
              </span>
            </div>
            
            <div className={styles.noteBody}>
              {/* Highlight @mentions purely as mock */}
              {note.content.split(' ').map((word, i) => (
                word.startsWith('@') ? <span key={i}>{word} </span> : `${word} `
              ))}
            </div>

            <div className={styles.noteActions}>
              <button><MessageSquare size={14}/> Reply</button>
              <button><History size={14}/> Edit History</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NotesTab;
