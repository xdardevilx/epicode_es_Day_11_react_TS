export interface Article {
    // article:       Article;
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: Date;
    updated_at:   Date;
    featured:     boolean;
    launches:     Launch[];
    events:       never[];
}

export interface Launch {
    launch_id: string;
    provider:  string;
}
