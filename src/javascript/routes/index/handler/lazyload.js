import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import { throttle } from 'throttle-debounce';

export default async () => {
    const scrollbars = Scrollbar.getAll();
    for (const scrollbar of scrollbars) {
        scrollbar.addListener(throttle(50, (status) => {
            
        }));
    }
}