import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData(): BlogPost[] {
    const filenames: string[] = fs.readdirSync(postsDirectory);
    const allPostsData: BlogPost[] = filenames.map((filename) => {
        const id: string = filename.replace(/\.md$/, '');
        
        const fullPath: string = path.join(postsDirectory, filename);
        const fileContent: string = fs.readFileSync(fullPath, 'utf8');
        const matterContent: matter.GrayMatterFile<string> = matter(fileContent);

        const blogPost: BlogPost = {
            id,
            title: matterContent.data.title,
            date: matterContent.data.date,
        }

        return blogPost;
    });

    return allPostsData.sort((a, b) => a.date < b.date ? 1: -1);
}

export async function getPostData(id: string): 
    Promise<BlogPost & { contentHTML: string}> {
    const fullPath: string = path.join(postsDirectory, `${id}.md`);
    const fileContent: string = fs.readFileSync(fullPath, 'utf8');
    const matterContent: matter.GrayMatterFile<string> = matter(fileContent);

    const processedContent = await remark()
        .use(html)
        .process(matterContent.content);

    const contentHTML = processedContent.toString();
    const HtmlBlogPost: BlogPost & { contentHTML: string } = {
        id,
        title: matterContent.data.title,
        date: matterContent.data.date,
        contentHTML
    }

    return HtmlBlogPost;
}   