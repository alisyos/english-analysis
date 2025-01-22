const Factory = () => {
  // ... 상태 관리 코드 유지 ...

  return (
    <Container>
      <Title>공장 등록 현황 조회</Title>
      
      <SearchSection>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="검색어를 입력하세요..."
        />
        <Button onClick={handleSearch}>검색</Button>
      </SearchSection>

      {isLoading ? (
        <LoadingMessage>검색 중...</LoadingMessage>
      ) : (
        <ResultsSection>
          {searchResults.length > 0 ? (
            <>
              <ResultCount>검색 결과: {searchResults.length}개</ResultCount>
              {searchResults.map((result, index) => (
                <ResultCard key={index}>
                  {result.factoryName && (
                    <ResultItem>
                      <Label>공장명:</Label> {result.factoryName}
                    </ResultItem>
                  )}
                  {result.address && (
                    <ResultItem>
                      <Label>주소:</Label> {result.address}
                    </ResultItem>
                  )}
                  {result.industry && (
                    <ResultItem>
                      <Label>업종:</Label> {result.industry}
                    </ResultItem>
                  )}
                  {result.products && (
                    <ResultItem>
                      <Label>주요생산품:</Label> {result.products}
                    </ResultItem>
                  )}
                </ResultCard>
              ))}
            </>
          ) : (
            searchQuery && <NoResults>검색 결과가 없습니다.</NoResults>
          )}
        </ResultsSection>
      )}
    </Container>
  );
};

export default Factory; 