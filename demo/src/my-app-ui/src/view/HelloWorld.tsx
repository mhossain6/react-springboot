
type AppProps = {
    name: string;
  }; /* use `interface` if exporting so that consumers can extend */
  
  // Easiest way to declare a Function Component; return type is inferred.
  const HelloWorld = ({ name }: AppProps) => {
      return   <div> Hello : {name}
      </div>;
  }

  export default HelloWorld;