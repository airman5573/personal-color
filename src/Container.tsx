import { SizeMe } from 'react-sizeme';

type Props = {
  children: JSX.Element;
};

const getMaxWidth = (width: number, height: number) => {
  if (!width || !height) return;
  const $app = document.querySelector('#root') as HTMLElement;
  const $body = document.querySelector('body') as HTMLElement;
  if (!$app || !$body) return;
  const maxWidth = Math.floor(($body.clientHeight / height) * width);
  return maxWidth;
};

function Container({ children }: Props) {
  return (
    <div className="container pt-10 pb-10" style={{ maxWidth: '100%' }}>
      {children}
    </div>
  );
  return (
    <SizeMe refreshRate={16} monitorHeight={true}>
      {({ size }) => {
        const { width, height } = size;
        const maxWidth = getMaxWidth(width ?? 1, height ?? 1);
        return (
          <div className="container pt-10 pb-10" style={{ maxWidth: '100%' }}>
            {children}
          </div>
        );
      }}
    </SizeMe>
  );
}

export default Container;
