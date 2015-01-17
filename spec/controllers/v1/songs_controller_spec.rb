describe V1::SongsController do
  render_views

  describe 'GET search' do
    before { get :search, query: 'coco', limit: 10, format: :json }
    let(:songs) { JSON.parse(response.body)['songs'] }

    it 'returns a successful 200 response' do
      expect(response).to be_success
    end

    it 'returns a JSON object of 10 songs' do
      expect(songs.count).to eq 10
    end
  end
end