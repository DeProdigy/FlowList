describe Search do
  let(:query) { 'coco' }

  context 'when initialized without limit' do
    let(:limit) { nil }
    let(:search) { Search.new query, limit }

    it 'defaults to 5' do
      expect(search.limit).to eq 5
    end
  end

  context 'when limit is under 20' do
    let(:limit) { 15 }
    let(:search) { Search.new query, limit }

    it 'return the number it was initialized with' do
      expect(search.limit).to eq 15
    end
  end

  context 'when limit is over' do
    let(:limit) { 25 }
    let(:search) { Search.new query, limit }

    it 'defaults to 20' do
      expect(search.limit).to eq 20
    end
  end
end