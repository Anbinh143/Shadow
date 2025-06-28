// == Locket Gold Unlock Script ==
// Unlocks: Premium status, 30s Video, Gold Badge
// Author: Vuong2023 + ChatGPT

let obj = JSON.parse($response.body || "{}");

obj.subscriber = {
  entitlements: {
    gold: {
      expires_date: "2099-12-31T23:59:59Z",
      product_identifier: "locket.gold.yearly",
      purchase_date: "2023-01-01T00:00:00Z"
    }
  },
  first_seen: "2023-01-01T00:00:00Z",
  original_app_user_id: "$RCAnonymousID:locket_golden_user_vuong2023",
  subscriptions: {
    "locket.gold.yearly": {
      billing_issues_detected_at: null,
      expires_date: "2099-12-31T23:59:59Z",
      is_sandbox: false,
      original_purchase_date: "2023-01-01T00:00:00Z",
      period_type: "normal",
      purchase_date: "2023-01-01T00:00:00Z",
      store: "app_store",
      unsubscribe_detected_at: null
    }
  }
};

// Giả lập thêm tính năng mở khóa
obj.features = {
  can_record_30s: true,
  show_gold_badge: true
};

$done({ body: JSON.stringify(obj) });
