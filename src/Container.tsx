import { useEffect, useState } from 'react';

type Props = {
  children: JSX.Element;
};

function Container({ children }: Props) {
  const [maxWidth, setMaxWidth] = useState<string>('100%');
  useEffect(() => {
    const $app = document.querySelector('#root') as HTMLElement;
    const $body = document.querySelector('body') as HTMLElement;
    if (!$app || !$body) return;
    requestAnimationFrame(() => {
      const _maxWidth = Math.floor(
        ($body.clientHeight / $app.offsetHeight) * $app.clientWidth,
      );
      console.log('maxWidth : ', _maxWidth);
      setMaxWidth(`${_maxWidth}px`);
    });
  }, []);
  return (
    <div className="container pt-10 pb-10" style={{ maxWidth }}>
      {children}
    </div>
  );
}

export default Container;
