import type { Metadata } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Thought leadership on design engineering, performance systems, and launch operations.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  const featured = posts.filter((post) => post.featured);
  const primaryPosts = featured.length ? featured : posts;

  return (
    <main className="py-5">
      <div className="studio-container">
        <section className="page-hero">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Insights</span>
          <h1 className="display-5 fw-bold mt-3">Signals, systems, and execution notes.</h1>
          <p className="lead mt-3">
            Field notes on building premium web systems: performance architecture, motion craft, content ops, and launch governance.
          </p>
        </section>

        {primaryPosts.length === 0 ? (
          <div className="glass-card p-4 p-lg-5 text-center">
            <h2 className="h4 text-white mb-2">No posts published yet</h2>
            <p className="text-muted mb-0">Add MDX files in `content/posts` to start publishing.</p>
          </div>
        ) : (
          <div className="post-grid">
            {primaryPosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-meta">
                  <span>{post.category ?? 'Insight'}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h2 className="post-title h4">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <Link href={`/blog/${post.id}`} className="text-decoration-none text-primary fw-semibold">
                    Read insight →
                  </Link>
                  <span className="text-muted small">{post.readingTimeMinutes} min read</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
