import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/lib/format';

export default function LatestPosts() {
  const allPostsData = getSortedPostsData();
  const featuredPosts = allPostsData.filter((post) => post.featured);
  const latestPosts = (featuredPosts.length ? featuredPosts : allPostsData).slice(0, 3);

  return (
    <section className="py-5 bg-transparent">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Executive insights</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Strategy, systems, and delivery notes
            </h2>
            <p className="text-muted mb-0">
              Playbooks on governance, performance, and scalable design systems.
            </p>
          </div>
          <Link href="/blog" className="text-decoration-none text-primary fw-semibold">
            View all insights →
          </Link>
        </div>
        <Row className="g-4">
          {latestPosts.map(({ id, date, title, excerpt, readingTimeMinutes, category }) => (
            <Col md={4} key={id}>
              <article className="glass-card h-100 p-4 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between text-muted small text-uppercase letter-spacing-1">
                  <span>{category ?? 'Insight'}</span>
                  <span>{formatDate(date)}</span>
                </div>
                <h3 className="h4 text-white">{title}</h3>
                <p className="text-muted flex-grow-1">{excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <Link href={`/blog/${id}`} className="text-decoration-none text-primary fw-semibold">
                    Read insight →
                  </Link>
                  <span className="text-muted small">{readingTimeMinutes} min read</span>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
