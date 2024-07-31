// plugins/cursor.js
export default ({ app }) => {
    if (process.client) {
      console.log("Cursor plugin loaded");
  
      document.addEventListener('DOMContentLoaded', () => {
        console.log("DOM content loaded, adding custom cursor");
  
        const cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);
        console.log("Custom cursor added to DOM");
  
        document.addEventListener('mousemove', (e) => {
          console.log("Mouse move detected at:", e.clientX, e.clientY);
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        });
  
        document.querySelectorAll('a').forEach((el) => {
          el.addEventListener('mouseover', () => {
            console.log("Mouse over link");
            cursor.classList.add('hover');
          });
          el.addEventListener('mouseleave', () => {
            console.log("Mouse leave link");
            cursor.classList.remove('hover');
          });
        });
      });
    }
  };
  