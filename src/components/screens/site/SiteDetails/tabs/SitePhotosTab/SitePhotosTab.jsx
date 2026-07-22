import React from "react";
import styles from "./SitePhotosTab.module.scss";
import { Folder, Image as ImageIcon } from "lucide-react";

export default function SitePhotosTab() {
  const folders = ["Foundation", "Roof", "Electrical", "Plumbing", "Interior", "Finishing"];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Site Photos Gallery</h3>
      </div>
      <div className={styles.grid}>
        {folders.map(f => (
          <div key={f} className={styles.folderCard}>
            <Folder size={32} className={styles.folderIcon} />
            <div className={styles.folderInfo}>
              <h4>{f}</h4>
              <span>12 Photos</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.recentSection}>
        <h4>Recent Uploads</h4>
        <div className={styles.photosGrid}>
          {/* Mock recent photos */}
          {Array.from({length: 4}).map((_, i) => (
            <div key={i} className={styles.photoCard}>
              <div className={styles.placeholderImg}>
                <ImageIcon size={32} color="#9ca3af" />
              </div>
              <div className={styles.photoMeta}>
                <span>IMG_{Math.floor(Math.random() * 9000 + 1000)}.jpg</span>
                <small>Today, 10:30 AM</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
