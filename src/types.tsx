export type MarkdownProps = {
  children: Array<any>;
};

export type Data = {
  markdownRemark: {
    htmlAst: string;
    frontmatter: {
      title: string;
    };
  };
};
