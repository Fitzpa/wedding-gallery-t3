import React from "react";

const ScrollToButton = React.forwardRef(({ id, title, children }: { id: string, title: string, children: any}, ref: any) => (
  <section ref={ref} id={id}>
    <h2>{title}</h2>
    {children}
  </section>
));

export default ScrollToButton;
