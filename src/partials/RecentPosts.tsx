import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => {
  // Commenting out the entire section so it won't be rendered
  // return (
  //   <Section
  //     title={
  //       <div className="flex items-baseline justify-between">
  //         <div>
  //           Recent <GradientText>Posts</GradientText>
  //         </div>

  //         <div className="text-sm">
  //           <a href="/posts/">View all Posts →</a>
  //         </div>
  //       </div>
  //     }
  //   >
  //     <BlogGallery postList={props.postList} />
  //   </Section>
  // );

  return null; // Always return null to ensure this component doesn't show up
};

export { RecentPosts };
