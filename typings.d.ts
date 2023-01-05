// Serves one purpose which is type checking. In this case it checks for the sections in sanity that were created in the schema folder. If a new section is created in the schema folder but this file isn't updated as well nothing will be sent through and it won't work that is why this is such an important file when it comes to the whole application working

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  };
  
  interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
  }
  
  interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
    credentials: string;
  }
  
  interface Image {
    _type: "image";
    asset: Reference;
  }
  
  interface Reference {
    _ref: string;
    _type: "reference";
  }
  
  interface Slug {
    _type: "slug";
    current: string;
  }
  
  interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  }
  
  interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }
  
  interface Category extends Base {
    description: string;
    title: string;
  }
  
  interface MainImage {
    _type: "image";
    asset: Reference;
  }
  
  interface Title {
    _type: "string";
    current: string;
  }