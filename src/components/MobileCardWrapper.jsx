import useInView from './InView'; // adjust the path as needed

const MobileCardWrapper = ({ children }) => {
  const [ref, inView] = useInView(0.75);
  return (
    <div
      ref={ref}
      className={`snap-center flex-shrink-0 w-[80%] transition-transform duration-300 ${
        inView ? 'transform -translate-y-8 scale-110' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default MobileCardWrapper;
