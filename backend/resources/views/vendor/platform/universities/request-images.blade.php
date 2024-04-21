<div class="bg-white rounded shadow-sm p-4 py-4 d-flex flex-column">
    @if($application->hasMedia('docs'))
        @foreach($application->getMedia('docs') as $media)
            <div class="form-group">
                <label for="">Images</label>
            </div>
            <img src="{{ $media->getUrl() }}" style="width: 100px; height: auto;"> <br>
        @endforeach
    @endif
</div>

