import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import routes from './routes';

const container = document.querySelector("body") as HTMLElement;
const root = createRoot(container);

root.render(<RouterProvider router={routes} />);
