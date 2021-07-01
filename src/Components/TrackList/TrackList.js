import React from "react";
import "./TrackList.css";
import { Track } from "../Track/Track";

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            id={track.id}
            audioPreview={track.preview_url && new Audio(track.preview_url)}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
            togglePlay={this.props.togglePlay}
            previewPlaying={this.props.previewPlaying}
            preview={this.props.preview}
            updateAudio={this.props.updateAudio}
          />
        ))}
      </div>
    );
  }
}
