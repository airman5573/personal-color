import { useEffect, useRef, useState } from 'react';
import Indicator from './Indicator';
import { getMaxWidth } from './utils';

type Props = {
  children: JSX.Element;
  isAllImageLoaded: boolean;
};

function Container({ children, isAllImageLoaded }: Props) {
  const [maxWidth, setMaxWidth] = useState<string>('100%');
  const $this = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isAllImageLoaded || !$this.current) return;
    const $el = $this.current;
    const maxWidth = getMaxWidth($el.offsetWidth, $el.offsetHeight);
    setMaxWidth(`${maxWidth}px`);
  }, [isAllImageLoaded]);
  const visibility = isAllImageLoaded ? 'visible' : 'hidden';
  return (
    <div className="container">
      <div className="inner v-center" ref={$this}>
        {!isAllImageLoaded && <Indicator />}
        {<div style={{ width: '100%', maxWidth, visibility }}>{children}</div>}
      </div>
    </div>
  );
}

export default Container;
