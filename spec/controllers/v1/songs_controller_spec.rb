describe V1::SongsController do
  render_views

  describe 'GET search' do
    let(:results) { JSON.parse(response.body)['results'] }

    it 'returns a successful 200 response' do
      VCR.use_cassette('songs_api_v1') do
        get :search, query: 'coco', limit: 10, format: :json
        expect(response).to be_success
      end
    end

    it 'returns a JSON object of 10 results' do
      get :search, query: 'coco', limit: 10, format: :json
      expect(results.count).to eq 10
    end
  end

  describe 'POST create' do
    let(:song_params) do
      {
                   "id" => "1",
        "soundcloud_id" => "178204007",
            "user_name" => "realstreetnigga",
                "title" => "O.T. Genasis-Im in love with the CoCo",
             "duration" => "245102",
           "stream_url" => "https://api.soundcloud.com/tracks/178204007/stream?client_id=7be89328fbf5eea69d5b70aaccf1125d"
      }
    end

    before { post :create, song: song_params, format: :json }

    it 'renders out a jbuilder template' do
      expect(response).to render_template(:create)
    end

    it 'returns a successful 200 response' do
      expect(response).to be_success
    end
  end
end
