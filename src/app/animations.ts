import { trigger, state, style, animate, transition } from '@angular/animations';

export const ChatBubbleAnimations = {
    sliderHiddenVisible: trigger('sliderHiddenVisible', [
        state('hidden', style({
            maxHeight: '120px',
            minHeight: '80px',
        })),
        state('visible', style({
            minHeight: '150px',
            maxHeight: '200px',
            maxWidth: '310px',
            minWidth: '310px',
        })),
        state('initiallyHidden', style({
            maxHeight: '120px',
            minHeight: '80px',
        })),
        transition('hidden <=> visible', [
            animate('0.3s')
        ]),
        transition('initiallyHidden => visible', [
            animate('0.3s')
        ]),
    ]),
    chatBubblehiddenVisible: trigger('chatBubblehiddenVisible', [
        state('hidden', style({
            opacity: '0',
        })),
        state('visible', style({
            opacity: '1',
        })),
        transition('hidden <=> visible', [
            animate('1s 0.5s', style({
            }))
        ]),
    ]),
    hiddenVisible: trigger('hiddenVisible', [
        state('hidden', style({
            opacity: '0',
        })),
        state('visible', style({
            opacity: '1',
        })),
        state('initiallyHidden', style({
            opacity: '0',
        })),
        transition('hidden <=> visible', [
            animate('1s 0.5s', style({
            }))
        ]),
        transition('initiallyHidden <=> visible', [
            animate('1s 0.5s', style({
            }))
        ]),
    ])
}