export default function YouTubeVideo({ videoId, title }) {
  if (!videoId) {
    return null;
  }

  return (
    <section className="place-video-section">

      <p className="details-tag">
        WATCH THE STORY
      </p>

      <h2>
        Discover {title} through video.
      </h2>

      <div className="youtube-video-wrapper">

        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${title} historical video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

      </div>

    </section>
  );
}