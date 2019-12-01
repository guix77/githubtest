define({ "api": [
  {
    "type": "post",
    "url": "/sum",
    "title": "Sum two numbers.",
    "version": "1.0.0",
    "name": "PostSum",
    "group": "Sum",
    "permission": [
      {
        "name": "public"
      }
    ],
    "description": "<p>Sum two numbers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "a",
            "description": "<p>First number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "b",
            "description": "<p>Second number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sum",
            "description": "<p>Sum of a &amp; b.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/sum.route.js",
    "groupTitle": "Sum"
  }
] });
