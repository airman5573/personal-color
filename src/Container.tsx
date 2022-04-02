import { useEffect, useRef, useState } from 'react';
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
  const visibility = maxWidth === '100%' ? 'hidden' : 'visible';
  return (
    <div className="container pt-10 pb-10" style={{ maxWidth, visibility }}>
      <div className="inner v-center" ref={$this}>
        {children}
      </div>
    </div>
  );
}

export default Container;
