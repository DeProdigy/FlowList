describe V1::SongsController do
  render_views

  describe 'GET search' do
    before { get :search, query: 'coco', limit: 10, format: :json }
    let(:results) { JSON.parse(response.body)['results'] }

    it 'returns a successful 200 response' do
      expect(response).to be_success
    end

    it 'returns a JSON object of 10 results' do
      expect(results.count).to eq 10
    end
  end
end