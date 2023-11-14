import { createRoot } from 'react-dom/client';

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);

root.render(<div>WELCOME TO REACT</div>);
