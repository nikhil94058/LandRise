import string
from collections import Counter
import matplotlib.pyplot as plt
from nltk.corpus import stopwords
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize

def analyze_sentiment(reviews):
    total_sentiment_score = 0
    
    for review in reviews:
        cleaned_text = review.lower().translate(str.maketrans('', '', string.punctuation))
        tokenized_words = word_tokenize(cleaned_text, "english")
        final_words = [word for word in tokenized_words if word not in stopwords.words('english')]
        lemma_words = [WordNetLemmatizer().lemmatize(word) for word in final_words]
        sentiment_score = SentimentIntensityAnalyzer().polarity_scores(cleaned_text)
        
        total_sentiment_score += sentiment_score['compound']

    average_sentiment_score = total_sentiment_score / len(reviews)

    if average_sentiment_score > 0.05:
        return 'Positive', 'Worthy to Buy'
    elif average_sentiment_score < -0.05:
        return 'Negative', 'Disputable'
    else:
        return 'Neutral', 'Neutral'

def plot_sentiment(sentiment_counts):
    plt.bar(sentiment_counts.keys(), sentiment_counts.values())
    plt.xlabel('Sentiment')
    plt.ylabel('Count')
    plt.title('Sentiment Analysis of Real Estate Reviews')
    plt.show()

def main():
    with open('real_estate_reviews.txt', 'r', encoding='utf-8') as file:
        reviews = file.read().split('\n\n')  # Assuming each review is separated by two newline characters
    
    sentiment, property_status = analyze_sentiment(reviews)
    print("Overall Sentiment:", sentiment)
    print("Property Status:", property_status)
    
    # Count sentiments
    sentiment_counts = Counter(sentiment)
    plot_sentiment(sentiment_counts)

if __name__ == "__main__":
    main()


