/**
 * Tests for the Error Message Fortune Cookies transformers
 */

import {
  confuciusTransformer,
  haikuTransformer,
  blameTransformer,
  tarotTransformer,
  motivationalTransformer,
  techSupportTransformer,
  poeticTransformer,
  zenTransformer
} from '../src/js/core/transformers';

import {
  shakespeareanTransformer,
  filmNoirTransformer,
  sciFiTransformer,
  pirateTransformer,
  westernTransformer,
  superheroTransformer,
  fantasyTransformer,
  bMovieTransformer,
  influencerTransformer,
  legalTransformer,
  recipeTransformer,
  sportsTransformer
} from '../src/js/core/creative-transformers';

describe('Fortune Transformers', () => {
  const testError = "TypeError: Cannot read property 'length' of undefined";
  
  describe('confuciusTransformer', () => {
    test('should return a string', () => {
      const result = confuciusTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include wisdom related to the error', () => {
      const result = confuciusTransformer(testError);
      // Check for any of these common words in Confucius wisdom
      const hasWisdomTerms = [
        'Confucius', 'wisdom', 'ancient', 'path', 'garden', 
        'enlightenment', 'developer', 'find', 'measure',
        'say', 'tells', 'knows', 'written', 'programmer',
        'code', 'bug', 'error', 'wise', 'fool'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasWisdomTerms).toBe(true);
    });
  });
  
  describe('haikuTransformer', () => {
    test('should return a string', () => {
      const result = haikuTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should format as haiku with line breaks', () => {
      const result = haikuTransformer(testError);
      expect(result).toContain('<br>');
    });
  });
  
  describe('blameTransformer', () => {
    test('should return a string', () => {
      const result = blameTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should provide an excuse', () => {
      const result = blameTransformer(testError);
      expect(result.length).toBeGreaterThan(20);
    });
  });
  
  describe('tarotTransformer', () => {
    test('should return a string', () => {
      const result = tarotTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should mention a card or position', () => {
      const result = tarotTransformer(testError);
      // Check for any tarot-related terms
      const hasTarotTerms = [
        'card', 'Card', 'position', 'upright', 'reverse', 
        'alignment', 'reveals', 'tarot', 'Tarot'
      ].some(term => result.includes(term));
      
      expect(hasTarotTerms).toBe(true);
    });
  });
  
  describe('motivationalTransformer', () => {
    test('should return a string', () => {
      const result = motivationalTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include HTML formatting', () => {
      const result = motivationalTransformer(testError);
      expect(result).toContain('<strong>');
    });
  });

  describe('techSupportTransformer', () => {
    test('should return a string', () => {
      const result = techSupportTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include tech support terminology', () => {
      const result = techSupportTransformer(testError);
      const hasTechTerms = [
        'issue', 'error', 'diagnostic', 'system', 'support',
        'solution', 'recommended', 'try', 'update', 'cache',
        'code', 'database', 'network', 'configuration', 'technical'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasTechTerms).toBe(true);
    });
  });

  describe('poeticTransformer', () => {
    test('should return a string', () => {
      const result = poeticTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include line breaks', () => {
      const result = poeticTransformer(testError);
      expect(result).toContain('<br>');
    });
  });

  describe('zenTransformer', () => {
    test('should return a string', () => {
      const result = zenTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include zen terminology', () => {
      const result = zenTransformer(testError);
      const hasZenTerms = [
        'path', 'breath', 'silence', 'mind', 'awareness',
        'journey', 'flow', 'teacher', 'learn', 'still',
        'error', 'code', 'developer', 'mindful', 'enlightenment'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasZenTerms).toBe(true);
    });
  });

  // Tests for creative transformers
  describe('shakespeareanTransformer', () => {
    test('should return a string', () => {
      const result = shakespeareanTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include Shakespearean language', () => {
      const result = shakespeareanTransformer(testError);
      const hasShakespeareanTerms = [
        'thou', 'thy', 'doth', 'hath', 'alas',
        'methinks', 'shall', 'ere', 'whence', 'foul'
      ].some(term => result.includes(term));
      
      expect(hasShakespeareanTerms).toBe(true);
    });
  });

  describe('filmNoirTransformer', () => {
    test('should return a string', () => {
      const result = filmNoirTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include noir terminology', () => {
      const result = filmNoirTransformer(testError);
      const hasNoirTerms = [
        'dark', 'night', 'dame', 'trouble', 'coffee',
        'fix', 'case', 'detective', 'mystery', 'shadow'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasNoirTerms).toBe(true);
    });
  });

  describe('sciFiTransformer', () => {
    test('should return a string', () => {
      const result = sciFiTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include sci-fi terminology', () => {
      const result = sciFiTransformer(testError);
      const hasSciFiTerms = [
        'quantum', 'matrix', 'flux', 'temporal', 'neural',
        'dimension', 'space', 'anomaly', 'system', 'protocol',
        'alert', 'warning', 'captain', 'stardate', 'detected',
        'subspace', 'continuum', 'fluctuation', 'code', 'crystals'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasSciFiTerms).toBe(true);
    });
  });

  describe('pirateTransformer', () => {
    test('should return a string', () => {
      const result = pirateTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include pirate terminology', () => {
      const result = pirateTransformer(testError);
      const hasPirateTerms = [
        'arr', 'matey', 'ye', 'plank', 'ship',
        'captain', 'scurvy', 'treasure', 'swabbie', 'hearty'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasPirateTerms).toBe(true);
    });
  });

  describe('superheroTransformer', () => {
    test('should return a string', () => {
      const result = superheroTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include superhero terminology', () => {
      const result = superheroTransformer(testError);
      const hasSuperheroTerms = [
        'hero', 'power', 'super', 'villain', 'evil',
        'justice', 'save', 'mighty', 'captain', 'avenger',
        'batman', 'league', 'nemesis', 'arch', 'kryptonite'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasSuperheroTerms).toBe(true);
    });
  });

  describe('fantasyTransformer', () => {
    test('should return a string', () => {
      const result = fantasyTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include fantasy terminology', () => {
      const result = fantasyTransformer(testError);
      const hasFantasyTerms = [
        'quest', 'magic', 'spell', 'sword', 'curse',
        'wizard', 'dragon', 'realm', 'shadow', 'ancient',
        'scroll', 'enchant', 'potion', 'goblin', 'elf'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasFantasyTerms).toBe(true);
    });
  });

  describe('bMovieTransformer', () => {
    test('should return a string', () => {
      const result = bMovieTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include B-movie terminology', () => {
      const result = bMovieTransformer(testError);
      const hasBMovieTerms = [
        'attention', 'earthlings', 'monster', 'creature', 'attack',
        'horror', 'terror', 'mysterious', 'threatens', 'scientists',
        'space', 'invasion', 'blob', 'escaped', 'laboratory'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasBMovieTerms).toBe(true);
    });
  });

  describe('influencerTransformer', () => {
    test('should return a string', () => {
      const result = influencerTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include influencer terminology', () => {
      const result = influencerTransformer(testError);
      const hasInfluencerTerms = [
        'omg', 'literally', 'like', 'subscribe', 'comment',
        'story', 'fail', 'vibe', 'link', 'bio',
        'hashtag', 'trending', 'viral', 'collab', 'sponsored'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasInfluencerTerms).toBe(true);
    });
  });

  describe('legalTransformer', () => {
    test('should return a string', () => {
      const result = legalTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include legal terminology', () => {
      const result = legalTransformer(testError);
      const hasLegalTerms = [
        'notice', 'pursuant', 'hereinafter', 'whereas', 'party',
        'violation', 'section', 'remedy', 'therefore', 'advised',
        'breach', 'compliance', 'rights', 'reserves', 'prejudice'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasLegalTerms).toBe(true);
    });
  });

  describe('recipeTransformer', () => {
    test('should return a string', () => {
      const result = recipeTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include recipe terminology', () => {
      const result = recipeTransformer(testError);
      const hasRecipeTerms = [
        'recipe', 'ingredient', 'cup', 'tablespoon', 'mix',
        'fold', 'batter', 'preparation', 'serving', 'garnish',
        'chef', 'cook', 'taste', 'flavor', 'dish'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasRecipeTerms).toBe(true);
    });
  });

  describe('sportsTransformer', () => {
    test('should return a string', () => {
      const result = sportsTransformer(testError);
      expect(typeof result).toBe('string');
    });
    
    test('should include sports terminology', () => {
      const result = sportsTransformer(testError);
      const hasSportsTerms = [
        'game', 'player', 'field', 'score', 'team',
        'coach', 'play', 'championship', 'quarter', 'timeout',
        'penalty', 'referee', 'stadium', 'fans', 'victory',
        'error', 'code', 'developer', 'bug', 'programming',
        'ladies', 'gentlemen', 'incredible', 'devastating'
      ].some(term => result.toLowerCase().includes(term));
      
      expect(hasSportsTerms).toBe(true);
    });
  });
});