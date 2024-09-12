from django.urls import path
from . import views  # Import views from the charts app

urlpatterns = [
    path('api/candlestick-data/', views.candlestick_data),
    path('api/line-chart-data/', views.line_chart_data),
    path('api/bar-chart-data/', views.bar_chart_data),
    path('api/pie-chart-data/', views.pie_chart_data),
]