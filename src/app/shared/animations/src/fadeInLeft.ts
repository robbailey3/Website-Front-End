import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInLeft = trigger('fadeInLeft', [
  state(
    'in',
    style({
      opacity: 1,
      height: '*',
      transform: 'translateX(0px) scale(1)'
    })
  ),
  transition('void => *', [
    style({
      opacity: 0,
      height: '0px',
      transform: 'translateX(500px) scale(0.2)'
    }),
    animate('0.3s')
  ]),
  transition('* => void', [
    animate(
      '0.4s',
      style({
        opacity: 0,
        height: '0px',
        transform: 'translateX(500px)  scale(0.2)'
      })
    )
  ])
]);
