export type MarkdownProps = {
  children: Array<any>;
};

type Node ={
  node:{
    fields:{
      slug: string
    }
    excerpt:string,
    frontmatter:{
      title:string,
      description:string,
      image:string,
    }
  }
}

export type Data = {
  markdownRemark: {
    htmlAst: string
    frontmatter: {
      title: string
    };
  },
  allMarkdownRemark:{
    edges:Array<Node>
  }
};
