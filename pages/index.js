import Head from 'next/head';
import AudioSpectrum from 'react-audio-spectrum';


export default function Home() {

  return (
    <div>
      <Head>
        <title>Sunny 97.7 Unseasonably Sunny [LIVE]</title>
      </Head>

      <main>
        <div className="player">
          <img
              className="player__img"
              src="sunny-logo.png"
            />
          <audio 
            className="player__audio"
            id="audio-element"
            src={process.env.STREAM_URL}
            autoPlay
            controls
            crossOrigin="anonymous"
          />
            <AudioSpectrum
              className="player__AudioSpectrum"
              id="audio-canvas"
              height={200}
              width={300}
              audioId={'audio-element'}
              capColor={'orange'}
              capHeight={1}
              meterWidth={2}
              meterCount={80}
              meterColor={[
                {stop: 0, color: '#FB3B44'},
                {stop: 0.5, color: '#FFEB13'},
                {stop: 1, color: 'red'}
              ]}
              gap={4}
            />
        </div>
      </main>
    </div>
  )
}
