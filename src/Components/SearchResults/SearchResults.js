import React from "react";
import "./SearchResults.css";
import { TrackList } from "../TrackList/TrackList";

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
          togglePlay={this.props.togglePlay}
          previewPlaying={this.props.previewPlaying}
          preview={this.props.preview}
          updateAudio={this.props.updateAudio}
        />
      </div>
    );
  }
}
