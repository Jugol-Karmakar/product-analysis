import React from "react";

const BlogDetails = () => {
  return (
    <div className="mx-20">
      <div className="pt-5">
        <h3 className="text-3xl font-semibold">Context Api ?</h3>
        <p className="py-8">
          Context API is a reactive structure that gives you unique details
          Enables communication and from all levels of your application
          Prop-drilling helps solve.React app A way to create variables that can
          be passed around. Redox A simple, easy way to manage the context using
          the context Also referred to as. React Context is what you need. It
          provides a Customer and a Provider. The provider is one The element
          that gives its child state according to its name. This is the store.
          Hold and parent of all the components that the store may need It will
          be 6 Consumers such as this is an ingredient that is consuming satte
          and Uses.
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-semibold">Semantic Tag ?</h3>
        <p className="py-8">
          A semantic element clearly defines its meaning to both the browser and
          the developer. Semantic HTML elements are those that clearly define
          their meaning in human and machine-readable ways. Elements like
          header, footer and article are all considered semantic because they
          accurately describe the purpose of the element and the type of content
          contained within them. Examples of non-semantic elements: say nothing
          about the content of div and span. Examples of semantic elements:
          form, table, and article - clearly define its content.
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-semibold">
          Inline , Block And Inline Block Elements ?
        </h3>
        <div className="mt-6">
          <p className="">
            <strong>Inline</strong> : inline The element doesn't start on a new
            line and only occupy just the width it requires. You can't set the
            width or height.
            <h4>
              <strong>Emaxple :</strong>
            </h4>
            <li>span</li>
            <li>a</li>
            <li>img</li>
            <li>small</li>
            <li>i</li>
          </p>
        </div>
        <div className="mt-6">
          <p className="">
            <strong>Block</strong> : block The element will start on a new line
            and occupy the full width available. And you can set width and
            height values. Block, the major difference is that inline-block does
            not add a line-break after the element, so the element can sit next
            to other elements.
            <h4>
              <strong>Exmaple :</strong>
            </h4>
            <li>div </li>
            <li>h1</li>
            <li> p</li>
            <li> p</li>
            <li> li</li>
            <li> section</li>
          </p>
        </div>
        <div className="mt-6">
          <p className="">
            <strong>Inline-Block</strong> : inline-block It's formatted just
            like the inline element, where it doesn't start on a new line. But,
            you can set width and height.inline-block, the top and bottom
            margins/paddings are respected, but with display inline they are
            not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
